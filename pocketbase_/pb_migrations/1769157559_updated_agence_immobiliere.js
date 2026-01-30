/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4220922108")

  // update collection data
  unmarshal({
    "name": "maison"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4220922108")

  // update collection data
  unmarshal({
    "name": "agence_immobiliere"
  }, collection)

  return app.save(collection)
})
