let arr = [1, 2, 3];
console.log(arr[0]);
console.log(
  arr.filter((e) => true),
  arr?.filter((e) => true)
);

const a = {
  size: limit,
  from: offset || 0,
  query: {
    bool: {
      must: {
        query_string: {
          query: text,
        },
      },
      filter: [
        { term: { "metadata.artifact_type": "model_entry" } },
        {
          bool: {
            must: {
              exists: { field: "entity.assets.catalog_id" },
            },
          },
        },
      ],
    },
  },
  aggregations: {},
};
