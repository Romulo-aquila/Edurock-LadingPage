import styled from "styled-components";

function CompaniesSession() {
    const Container = styled.div`
        width: 100%;
        height: 139px;
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 9rem;
    `;

    const Logo = styled.img``;

  return (
    <>
        <Container>
            <Logo src="assets/brand_1.png" alt="logo_hexa" width={150} height={49} />
            <Logo src="assets/brand_2.png" alt="logo_circle" width={133} height={37} />
            <Logo src="assets/brand_3.png" alt="logo_treva" width={151} height={54} />
            <Logo src="assets/brand_4.png" alt="logo_ATLAS"  width={143} height={37}/>
            <Logo src="assets/brand_5.png" alt="logo_JOSEF"  width={87} height={30} />
        </Container>
    </>
  )
}

export default CompaniesSession;