ServerEvents.recipes(event => {
    // Recipe for 4 chests from 8 logs
    event.shaped(Item.of('minecraft:chest', 4), [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: '#minecraft:logs'
    });

    // Recipe for 16 sticks from 2 logs
    event.shaped(Item.of('minecraft:stick', 16), [
        'A',
        'A'
    ], {
        A: '#minecraft:logs'
    });
});