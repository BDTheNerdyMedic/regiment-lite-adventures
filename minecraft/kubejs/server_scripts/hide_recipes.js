RecipeViewerEvents.removeEntries('item', event => {
    event.remove(/^ftbquests:/);
    event.remove('lootr:trophy');
    event.remove('biomesoplenty:anomaly');
    event.remove('minecraft:spawner');
    event.remove('minecraft:trial_spawner');
    event.remove(/biomesoplenty:.*null.*/);
    event.remove(/biomesoplenty:.*_chest_boat/);
});

RecipeViewerEvents.removeEntries('fluid', event => {
    event.remove('biomesoplenty:liquid_null');
});