ServerEvents.recipes(event => {
    // Remove Biomes O' Plenty Boats with Chest due to item despawn issue
    event.remove({ id: /biomesoplenty:.*_chest_boat/ });
});
