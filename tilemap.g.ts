// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101000001000000000000000000000000000000010000000001000000000101000000000101010101000000000000010100000000000000010101010000000001010101000000000000000100010101010000010000000000000000000001010000000100000000010101000000000000000001000000000100000000000101000001010000000001000001010101010101010000000001000100010000000000000000000000010000000101000001010100000000000100000000000000010001010100000001000000000000010100000001010000010101000000000100000000000100000101000002010101000001000001010101010000`, img`
2 2 2 2 2 2 2 . . 2 . . . . . . 
. . . . . . . . . 2 . . . . 2 . 
. . . 2 2 . . . . 2 2 2 2 2 . . 
. . . . 2 2 . . . . . . . 2 2 2 
2 . . . . 2 2 2 2 . . . . . . . 
2 . 2 2 2 2 . . 2 . . . . . . . 
. . . 2 2 . . . 2 . . . . 2 2 2 
. . . . . . . . 2 . . . . 2 . . 
. . . 2 2 . . 2 2 . . . . 2 . . 
2 2 2 2 2 2 2 2 . . . . 2 . 2 . 
2 . . . . . . . . . . . 2 . . . 
2 2 . . 2 2 2 . . . . . 2 . . . 
. . . . 2 . 2 2 2 . . . 2 . . . 
. . . 2 2 . . . 2 2 . . 2 2 2 . 
. . . 2 . . . . . 2 . . 2 2 . . 
. 2 2 2 . . 2 . . 2 2 2 2 2 . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
