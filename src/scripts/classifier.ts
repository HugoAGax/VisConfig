class Classifier {
    data: object
    categories: object

    constructor(config) {
        console.log('///CLASIFIER', config);
        Object.assign(this, config);
        this.data = config.data;
        this.categories = config.categories;
    }

    setData (data: object) {
        this.data = data;
        return this;
    }

    classifyAll () {
        let classifier = this;
        let data = this.data;
        let results: Array<{ 
            cpt: string, 
            name: string,
            type: string,
            value: string  }> = [];

        Object.keys(data).forEach(prop => {
            if (data[prop] === undefined || data[prop] === null) {
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