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
    align-items: center;
    width: var(--smallWidth);
    margin: 0 auto;
    max-width: var(--fullWidth);
}

.nav-links {
    display: flex;
    align-items: center;
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
    box-shadow: #476a2e;
`
