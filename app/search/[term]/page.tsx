import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string;
    }
}

function SearchPage({params: {term}}: Props) {
  if (!term) notFound()  
  
  const termToUse = decodeURI(term)
  // APi call to get searched movies
  //API call to get Popular movies
  return (
    <div>Welcome to the search page: {termToUse}</div>
  )
}

export default SearchPage