// =========================================================
// PATHFINDING: сітка прохідності + BFS маршрут для анімованого
// переміщення токенів. Чисті функції — не залежать від стану
// розширення (gameState/extSettings), лише від layout/координат
// на вхід, тому безпечно винесені з index.js окремим модулем.
// =========================================================

// Грід для побудови МАРШРУТУ (на відміну від getOccupancyGrid у index.js, який
// рахує зайняті клітинки для розміщення). Тут блокують лише меблі з
// occupiable:false — через occupiable:true меблі та через інші токени токен
// ходити може (фінальна колізія все одно перевіряється окремо при виборі
// клітинки призначення).
export function getWalkableGrid(layout, roomId) {
    const roomData = layout?.rooms?.[roomId];
    if (!roomData) return null;
    const grid = [];
    for (let r = 0; r < roomData.grid.rows; r++) grid[r] = new Array(roomData.grid.cols).fill(false);
    if (Array.isArray(roomData.furniture)) {
        for (const item of roomData.furniture) {
            if (item.occupiable) continue; // прохідне
            for (let x = item.x; x < item.x + item.w; x++) {
                for (let y = item.y; y < item.y + item.h; y++) {
                    if (y >= 0 && y < roomData.grid.rows && x >= 0 && x < roomData.grid.cols) grid[y][x] = true;
                }
            }
        }
    }
    return grid; // true = заблоковано
}

// BFS найкоротшого маршруту по гріду (4 напрямки, без діагоналей — рухи лишаються
// вздовж клітинок сітки). Повертає масив кроків {x,y} від першої клітинки ПІСЛЯ
// старту до фінішу включно, [] якщо старт === фініш, або null якщо шлях не знайдено.
export function findGridPath(blockedGrid, startX, startY, endX, endY) {
    const rows = blockedGrid?.length || 0;
    const cols = blockedGrid?.[0]?.length || 0;
    if (!rows || !cols) return null;
    if (startX < 0 || startX >= cols || startY < 0 || startY >= rows) return null;
    if (endX < 0 || endX >= cols || endY < 0 || endY >= rows) return null;
    if (blockedGrid[endY][endX]) return null;
    if (startX === endX && startY === endY) return [];

    const key = (x, y) => `${x},${y}`;
    const startKey = key(startX, startY);
    const endKey = key(endX, endY);
    const cameFrom = new Map(); // childKey -> {x,y} батьківська клітинка
    const visited = new Set([startKey]);
    const queue = [{ x: startX, y: startY }];
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let head = 0;
    let found = false;

    while (head < queue.length) {
        const cur = queue[head++];
        if (key(cur.x, cur.y) === endKey) { found = true; break; }
        for (const [dx, dy] of dirs) {
            const nx = cur.x + dx, ny = cur.y + dy;
            if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) continue;
            if (blockedGrid[ny][nx]) continue;
            const nk = key(nx, ny);
            if (visited.has(nk)) continue;
            visited.add(nk);
            cameFrom.set(nk, cur);
            queue.push({ x: nx, y: ny });
        }
    }
    if (!found) return null;

    const path = [];
    let curKey = endKey;
    let curNode = { x: endX, y: endY };
    while (curKey !== startKey) {
        path.unshift(curNode);
        curNode = cameFrom.get(curKey);
        if (!curNode) return null; // захист від пошкодженого ланцюжка
        curKey = key(curNode.x, curNode.y);
    }
    return path;
}
