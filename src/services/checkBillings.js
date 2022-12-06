import axios from "axios"

export default async function (billing) {
    let allBillings = []

    await axios
        .get("http://127.0.0.1:3000/api/rfw/school/billing/")
        .then(resp => allBillings = resp.data)
        .catch(err => console.log(err))

    // for (const billing of billings) {
    let existing = allBillings.find(item => billing.rate == item.rate && billing.ratio == item.ratio && billing.isFixed == item.isFixed)

    if (existing) {
        billing.id = existing.id
        // console.log(billings)
    } else {
        axios
            .post('http://127.0.0.1:3000/api/rfw/school/billing/', billing)
            .then(resp => { billing.id = resp.data.id })
            .catch(err => console.log(err))
    }

    return billing
    // }

}