/**
 * Only if the room is square
 * @param length
 * @param width
 * @param height
 */
function wallSize(length, width, height) {
    lengthRoomWall = (+length + width) * 2;
    return lengthRoomWall * height;
}

/**
 *
 * @type {{length: string, width: string}}
 */
var rollOfWallpaper = {length: '', width: ''};

rollOfWallpaper.length = 5;
rollOfWallpaper.width = 0.85;
rollOfWallpaper.square = rollOfWallpaper.width * rollOfWallpaper.length;

wallSqare = wallSize(25, 16, 3.8).toFixed(2);

var countOfWallpaper = wallSqare / rollOfWallpaper.square;

alert('Количество рулонов обоев для оклеивания квадратной комнаты площадь стен ' + wallSqare + ' кв.м.:  ' + Math.ceil(countOfWallpaper) + ' рулона');
