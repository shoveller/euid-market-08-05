/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x0ezyzjp19yabmy")

  // remove
  collection.schema.removeField("jeykrqr5")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x0ezyzjp19yabmy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jeykrqr5",
    "name": "userBadge",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "1",
        "2",
        "3",
        "4"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
