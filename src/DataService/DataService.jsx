

export const DataService = {
    getProductsData() {
        return [
            {
                id: 1,
                name: 'What is the best alternatives to save beaches ??',
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt,lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti.",
                image: "alex-suprun-tCvEbgjEoCA-unsplash.jpg",   
            },
            {
                id: 2,
                name: 'VR more and more in our lives ',
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt,lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti.",
               
                image: "uriel-soberanes-MxVkWPiJALs-unsplash.jpg"
            },
            {
                id: 3,
                name: "What are the major points on AI",
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt,lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti.",
                image: "thisisengineering-raeng-sbVu5zitZt0-unsplash.jpg"
            },
            {
                id: 4,
                name: "What is really in deep our oceans?",
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt,lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti.",
                image: "neom-mPHOMhm45wk-unsplash.jpg"
            },
            {
                id: 5,
                name: 'Toward using green energies',
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt,lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti.",
                image: "jason-blackeye-nyL-rzwP-Mk-unsplash.jpg"
            },
            {
                id: 6,
                name: 'What is the best destinations this winter?',
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt,lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti.",
                image: "eva-darron-oCdVtGFeDC0-unsplash.jpg"
            },
            {
                id: 7,
                name: "Using drone becoming common...",
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt,lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti.",
                image: "david-grandmougin-hK7bhXJT-YA-unsplash.jpg"
            },
            {
                id: 8,
                name: 'Do you know this?',
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt,lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti.",
                image: "image1.jpg"
            },
            {
                id: 9,
                name: 'How to be more productive?',
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt,lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti.",
                image:"cytonn-photography-ZJEKICY5EXY-unsplash.jpg"
            },
          
           
        ];
    },

  

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

