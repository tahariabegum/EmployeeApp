import {useState} from "react" 
import EmployeeList from "../components /EmployeeList"
import Header from "../components /Header"
import SearchBar from "../components /SearchBar"

export default function Home ({users}) {

    const [filteredEmp, setFilteredEmp] = useState(users)

    function handleSearch (input) {
        const filteredList = users.filter((emo)=> {
            let fullName = `${emp.first_name} ${emp.last_name}`
            return fullName.toLowerCase().includes(input.toLowerCase())
        })
        setFilteredEmp(filteredList)
    }

    return (
        <div className = "homepage">
            <Header /> 
            <SearchBar onSearch = {handleSearch} />
            <EmployeeList users = {filteredEmp} />
        </div>
    )

}