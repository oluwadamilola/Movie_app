import styled from "styled-components";


export const StyledButton = styled.button `
    background-color: rgb(147, 209, 245);
    border: 1px solid rgb(147, 209, 245);
    margin: 1px;
    padding: 0.20em 0.25em;
    color: white;
    margin-left: 1rem;
  `;


export const Navstyled = styled.div `
.navbar{
    height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: 2px solid white;
    box-shadow: #476a2e;
    }
.nav-center {
    display: flex;
    justify-content: space-between;
}

.nav-links {
    display: flex;
    align-items: left;
}

.nav-links a {
    text-decoration: none;
    text-transform: capitalize;
    display: inline-block;
    font-weight: bold;
    margin-right: 0.5rem;
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
    transition: var(--mainTransition);
}

.nav-links a:hover {
    color: #476a2e;
}

`
export const Nav = styled.nav `
 height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: 2px solid white;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3)
`
export const ListItem = styled.li `
font-size: 20px;
    list-style-type: none
`
export const Table = styled.table `

  width: 95%;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  padding: 5rem;
  margin: 2rem;

.episodeTable th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: rgb(147, 209, 245);
    color: white;
}
`;
export const TableData = styled.td `
  border: 1px solid #ddd;
    padding: 8px;
`
export const Td = styled.td `
border: 1px solid #ddd;
    padding: 8px;
`
export const Tr = styled.tr `
border: 1px solid #ddd;
    padding: 12px;
        
`
export const Th = styled.th `
 padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: rgb(147, 209, 245);
    color: white;
    border: 1px solid #ddd;
    padding: 8px
`
export const Buttoncontainer = styled.div `
margin: 15px;
`
