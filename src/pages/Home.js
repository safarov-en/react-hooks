import { Search } from "../components/Search"
import { Card } from "../components/Card"

export const Home = () => {
    return (
        <>
            <Search />
            <div className="row mt-4">
                <div className="col-sm-4 mb-4">
                    <Card />
                </div>
                <div className="col-sm-4 mb-4">
                    <Card />
                </div>
                <div className="col-sm-4 mb-4">
                    <Card />
                </div>
            </div>
        </>
    )
}