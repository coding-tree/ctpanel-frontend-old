import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
    flex-direction: column;
    width: 300px;
    height: 100vh;
    background-color: hsl(146, 100%, 29%);
`;
const TitleWrapper = styled.header`
    padding: 20px;
    color: #ffffff;
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
`;
const MenuWrapper = styled.div`
    padding: 20px;
`;
const SubmenuWrapper = styled.div`
    padding: 20px;
    margin: auto 0 25px 0;
`;

const CopyrightsWrapper = styled.div`
    justify-content: center;
    padding: 0 0 30px 0;
    color: #ffffff;
    font-size: 1.2rem;
`;

const StyledLinksList = styled.ul`
    flex-direction: column;
    width: 100%;
`;
const StyledLinkElement = styled.li`
    height: 60px;
    border-radius: 30px 0 0 30px;
    overflow: hidden;
`;
const StyledLink = styled.a`
width: 100%;
align-items: center;
padding: 0 0 0 50px;
font-weight: 600;

&.active{
    color: hsl(146, 100%, 29%);
    background-color: #ffffff;
}`;

const MenuSidebar = () => {

    return (
        <StyledWrapper>
            <TitleWrapper>
                MANAGER SPOTKAŃ
            </TitleWrapper>
            <MenuWrapper>
                <StyledLinksList>
                    <StyledLinkElement>
                        <StyledLink as={NavLink} to="/home" activeclass="active">
                            HOME
                        </StyledLink>
                    </StyledLinkElement>
                    <StyledLinkElement >
                        <StyledLink as={NavLink} to="/timetable" activeclass="active">
                            Harmonogram
                        </StyledLink>
                    </StyledLinkElement>
                    <StyledLinkElement >
                        <StyledLink as={NavLink} to="/topicDatabase" activeclass="active">
                            Baza tematów
                        </StyledLink>
                    </StyledLinkElement>
                    <StyledLinkElement >
                        <StyledLink as={NavLink} to="/history" activeclass="active">
                            Historia
                        </StyledLink>
                    </StyledLinkElement>
                    <StyledLinkElement >
                        <StyledLink as={NavLink} to="/materials" activeclass="active">
                            Materiały
                        </StyledLink>
                    </StyledLinkElement>
                </StyledLinksList>
            </MenuWrapper>
            <SubmenuWrapper>
                <StyledLinksList>
                    <StyledLinkElement >
                        <StyledLink as={NavLink} to="/myProfile" activeclass="active">
                            Profil
                        </StyledLink>
                    </StyledLinkElement>
                    <StyledLinkElement >
                        <StyledLink as={NavLink} to="/settings" activeclass="active">
                            Ustawienia
                        </StyledLink>
                    </StyledLinkElement>
                </StyledLinksList>
            </SubmenuWrapper>
            <CopyrightsWrapper>
                Copyright &#169; Coding Tree | 2019
            </CopyrightsWrapper>
        </StyledWrapper >
    );
};

export default MenuSidebar;