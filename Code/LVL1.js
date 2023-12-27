let lvl1 = {
    size: { width: 25, height: 25, depth: 4 },
    depth: .025,
    map: [68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68,
        68, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 79, 96, 96, 96, 96, 96, 79, 55, 55, 55, 55, 55, 95, 95, 95, 95, 95, 95, 95, 95, 55, 55, 68,
        68, 55, 74, 55, 55, 55, 55, 55, 74, 55, 55, 55, 55, 55, 95, 95, 95, 95, 95, 95, 95, 95, 55, 55, 68,
        68, 55, 74, 55, 67, 55, 55, 55, 74, 55, 55, 55, 55, 55, 95, 95, 95, 95, 95, 95, 95, 95, 55, 55, 68,
        68, 55, 74, 55, 55, 55, 55, 55, 74, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 74, 55, 55, 55, 79, 96, 79, 55, 55, 55, 55, 55, 95, 95, 95, 95, 95, 95, 95, 95, 55, 55, 68,
        68, 55, 74, 55, 55, 55, 74, 55, 55, 55, 55, 55, 55, 55, 95, 95, 95, 95, 95, 95, 95, 95, 55, 55, 68,
        68, 55, 74, 55, 55, 55, 74, 55, 55, 55, 55, 55, 55, 55, 95, 95, 95, 95, 95, 95, 95, 95, 55, 55, 68,
        68, 55, 74, 55, 55, 55, 74, 55, 55, 55, 55, 75, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 79, 96, 55, 96, 79, 55, 55, 55, 72, 72, 72, 75, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 55, 55, 55, 55, 55, 55, 55, 55, 75, 75, 72, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 55, 55, 55, 55, 55, 55, 55, 75, 75, 75, 75, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 75, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 55, 55, 55, 55, 55, 94, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 55, 55, 55, 55, 91, 78, 92, 55, 55, 55, 55, 55, 68, 68, 68, 68, 68, 68, 68, 55, 68, 68, 68,
        68, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 94, 55, 55, 68, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 55, 55, 94, 55, 55, 55, 55, 55, 91, 78, 92, 55, 68, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 55, 91, 78, 92, 55, 94, 55, 55, 55, 93, 55, 55, 68, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 55, 55, 93, 55, 91, 78, 92, 55, 55, 55, 55, 55, 68, 55, 55, 55, 55, 1, 55, 55, 55, 55, 68,
        68, 55, 55, 55, 55, 55, 55, 93, 55, 94, 55, 55, 55, 55, 68, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 55, 55, 55, 55, 55, 55, 91, 78, 92, 55, 55, 55, 68, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 55, 55, 55, 55, 55, 55, 55, 55, 93, 55, 55, 55, 55, 68, 55, 55, 55, 55, 55, 55, 55, 55, 55, 68,
        68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 79, 96, 0, 0, 0, 96, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 67, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 79, 96, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 74, 0, 0, 0, 0, 0, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 79, 96, 0, 96, 79, 0, 0, 0, 75, 75, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 68, 68, 68, 68, 68, 68, 0, 68, 68, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 1, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 79, 96, 0, 0, 0, 96, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 79, 96, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 79, 96, 96, 96, 79, 0, 0, 0, 75, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 79, 96, 96, 96, 96, 96, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 79, 96, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 74, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 79, 96, 96, 96, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68,
        68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68],
    collision: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    actors: [function (game) {
        game.state = 2;
        game.dialogHandler.Load("osodiao")
    }, function (game) {
        game.currentMap = lvlWell;
        game.map.currentMap = lvlWell;
        game.player.x =3;
        game.player.y =3;
    }]
}

let lvlWell = {
    size: { width: 7, height: 7, depth: 4 },
    depth: 0.025,
    map: [0, 0, 68, 68, 68, 0, 0,
        0, 68, 55, 55, 55, 68, 0,
        68, 55, 55, 55, 55, 55, 68,
        68, 67, 55, 55, 55, 67, 68,
        68, 55, 55, 55, 55, 55, 68,
        0, 68, 55, 67, 55, 68, 0,
        0, 0, 68, 68, 68, 0, 0,
        0, 0, 68, 68, 68, 0, 0,
        0, 68, 0, 0, 0, 68, 0,
        68, 0, 0, 0, 0, 0, 68,
        68, 67, 0, 0, 0, 67, 68,
        68, 0, 0, 0, 0, 0, 68,
        0, 68, 0, 67, 0, 68, 0,
        0, 0, 68, 68, 68, 0, 0, 0, 0, 68, 68, 68, 0, 0,
        0, 68, 0, 0, 0, 68, 0,
        68, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 68,
        68, 0, 0, 0, 0, 0, 68,
        0, 68, 0, 0, 0, 68, 0,
        0, 0, 68, 68, 68, 0, 0,],
    collision: [[1, 1, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 2, 0, 0, 0, 2, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 2, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],],
    actors: [function(game){
        game.state = 2;
        game.dialogHandler.Load("Daddy")
    }]
    
}