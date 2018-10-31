export class HelpersProvider {

    constructor() {
        console.log('Hello HelpersProvider Provider');
    }
    
    toggleSection(data, i) {
		data[i].open = !data[i].open;
	}

	toggleItem(data, i, j) {
		data[i].children[j].open = !data[i].children[j].open;
	}

}
