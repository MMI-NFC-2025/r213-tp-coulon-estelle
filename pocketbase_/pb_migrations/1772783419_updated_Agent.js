/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_738987378")

  // update collection data
  unmarshal({
    "name": "agent"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_738987378")

  // update collection data
  unmarshal({
    "name": "Agent"
  }, collection)

  return app.save(collection)
})
