class Classifier {
  data: object
  categories: object
  path: string

  constructor(config) {
    Object.assign(this, config);
    this.data = config.data;
    this.categories = config.categories;
  }

  setData(data: object) {
    this.data = data;
    return this;
  }

  classifyAll() {
    let classifier = this;
    let data = this.data;
    let location = this.path;
    let results: Array<{
      cpt: string,
      name: string,
      type: string,
      value: string
    }> = [];

    Object.keys(data).forEach((prop, i) => {
      if (data[prop] === undefined) {
        results.push({
          cpt: classifier.categories["string"],
          value: "undefined",
          name: prop,
          type: "undefined"
        });
        return;
      }

      if (data[prop] === null) {
        results.push({
          cpt: classifier.categories["string"],
          value: "null",
          name: prop,
          type: "null"
        });
        return;
      }

      let type = typeof data[prop];
      switch (type) {
        case "string":
          results.push({
            cpt: classifier.categories[type],
            type: 'text',
            value: data[prop],
            name: prop
          });
          break;

        case "number":
          results.push({
            cpt: classifier.categories[type],
            type: 'number',
            value: data[prop],
            name: prop
          });
          break;

        case "boolean":
          results.push({
            cpt: classifier.categories[type],
            type: 'boolean',
            value: data[prop],
            name: prop
          });
          break;

        case "object":
          results.push({
            cpt: classifier.categories[type],
            value: data[prop],
            name: prop,
            type: 'obj'
          });
          break;
      }
    });
    return results;
  }

}

export default Classifier;