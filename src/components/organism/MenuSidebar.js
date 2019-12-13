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
const MenuWrapper = styled.div``;
const SubmenuWrapper = styled.div``;
const CopyrightsWrapper = styled.div``;

const StyledLinksList = styled.ul`
    flex-direction: column;
`;
const StyledLinkElement = styled.li``;
const StyledLink = styled.a``;

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