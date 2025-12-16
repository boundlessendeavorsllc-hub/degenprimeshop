const SHIPPO_TOKEN = "shippo_test_0780e3bfc011b216101be396167f6c06b9c52f45";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const { country } = req.body;

    if (!country) {
        res.status(400).json({ error: "Country required" });
        return;
    }

    const shipment = {
        address_from: {
            name: "DegenPrimeShop",
            street1: "123 Main St",
            city: "Millstone Township",
            state: "NJ",
            zip: "08535",
            country: "US",
            phone: "5551234567",
            email: "ops@degenprimeshop.com"
        },
        address_to: {
            name: "Customer",
            street1: "123 Test St",
            city: "Test City",
            zip: "00000",
            country: country,
            phone: "5550000000"
        },
        parcels: [{
            length: "30",
            width: "20",
            height: "10",
            distance_unit: "cm",
            weight: "2000",
            mass_unit: "g"
        }],
        async: false
    };

    try {
        const response = await fetch("https://api.goshippo.com/shipments/", {
            method: "POST",
            headers: {
                "Authorization": `ShippoToken ${SHIPPO_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shipment)
        });

        const data = await response.json();

        if (data.rates) {
            const rates = data.rates.filter(r => 
                r.servicelevel.token.includes("express") || 
                r.servicelevel.token.includes("priority") || 
                r.servicelevel.token.includes("expedited")
            );
            res.status(200).json(rates);
        } else {
            res.status(500).json({ error: "No rates available" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const config = {
    api: {
        bodyParser: true,
    },
};
