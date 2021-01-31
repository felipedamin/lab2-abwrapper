use std::io;
fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("error reading stdin");
    let n: usize = input.trim().parse::<usize>().expect("invalid input");

    let mut segments: Vec<[i64; 2]> = Vec::new();

    for _i in 0..n {
        input.clear();
        io::stdin().read_line(&mut input).expect("error reading stdin");
        let tuple = &mut input.split_whitespace();

        let a: i64 = tuple.next().unwrap().trim().parse::<i64>().expect("invalid input");
        let b: i64 = tuple.next().unwrap().trim().parse::<i64>().expect("invalid input");

        segments.push([a, b]);
    }

    segments.sort_by(|a, b| a[1].cmp(& b[1]));
    segments.sort_by(|a, b| a[0].cmp(& b[0]));
    
    let mut points: Vec<i64> = Vec::new();
    let mut leftmost_end: i64 = segments[0][1];

    for i in 0..n {
        if segments[i][0] >= leftmost_end && segments[i][1] != leftmost_end && !points.contains(& segments[i][0]) {
            points.push(leftmost_end);
            leftmost_end = segments[i][1];
        }
        else if segments[i][1] <= leftmost_end && i == n-1 {
            points.push(segments[i][1]);
        }
        if segments[i][1] < leftmost_end {
            leftmost_end = segments[i][1];
        }
    }

    println!("{:?}", segments);
    println!("{:?}", points.len());
    for i in points.iter() {
        print!("{} ", i);
    }
}