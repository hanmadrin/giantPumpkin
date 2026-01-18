

(async () => {
    function isValidListing(item) {
        console.log(item)
        const dealerShip = item.innerText.search('Dealership');
        if (dealerShip != -1) {
            console.log("dealership")
            return false;
        }
        const details = item.querySelectorAll("span:not(:has(*)):not(:empty)");
        if (details.length != 4) {
            console.log("not 4 line details")
            return false;
        }
        // const [priceText, yearNameText, stateCityText, mileageText] = details.map(elm => elm.innerText);
        const [priceText, yearNameText, stateCityText, mileageText] = Array.from(details).map(elm => elm.innerText);
        const price = priceText.replace('$', '').replace(',', '')
        // yearNameText = 2012 Land Rover range rover evoque
        const year = yearNameText.match(/^\d{4}/);
        const make = yearNameText.replace(/^\d{4}/, '').trim().split(" ")[0];
        const state = stateCityText.split(',')[1].trim();
        // 77K miles
        const mileage = mileageText.match(/\d+/)[0] * 1000;

        const validStates = ['WI', 'IL', 'TN', 'MS', 'AL', 'FL', 'GA', 'SC', 'NC', 'KY', 'VA', 'IN', 'MI', 'OH', 'PA', 'NY', 'ME', 'NH', 'VT', 'MA', 'RI', 'CT', 'NJ', 'DE', 'MD', 'WV', 'MN', "IA", "MO", "AR", "TX", "OK", 'KS', 'ND'];
        const validMakes = [
            "BUICK",
            "CHEVROLET",
            "CHEVY",
            "CHRYSLER",
            "FIAT",
            "FORD",
            "GMC",
            "HONDA",
            "HYUNDAI",
            "JEEP",
            "KIA",
            "LINCOLN",
            "MAZDA",
            "MITSUBISHI",
            "NISSAN",
            "RAM",
            "SCION",
            "SMART",
            "SUBARU",
            "TOYOTA",
            "VOLKSWAGEN"
        ];

        // 10000-120000 mileage
        // 5000 - 50000 price
        // 2016 - 2025 year
        if (price < 5000 || price > 50000) {
            console.log("invalid price")
            return false;
        }
        if (year < 2016 || year > 2025) {
            console.log("invalid year")
            return false;
        }
        if (mileage < 10000 || mileage > 120000) {
            console.log("invalid mileage")
            return false;
        }
        if (!validMakes.includes(make.toUpperCase())) {
            console.log("invalid make")
            return false;
        }
        if (!validStates.includes(state)) {
            console.log("invalid state")
            return false;
        }

        // console.log(item)
        return true;
    }
    const items = document.querySelectorAll('[href^="/marketplace/item"]');
    let numbers = [];
    console.log(items.length);
    for (i = 0; i < items.length; i++) {
        console.log(`index ${i}`);
        if(isValidListing(items[i])){
            numbers.push(items[i].getAttribute('href').split('/')[3]);
        }
    }
    numbers = [...new Set(numbers)];
    console.log(numbers);
})();