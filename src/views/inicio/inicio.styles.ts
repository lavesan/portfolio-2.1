import styled, { css } from 'styled-components';

export const StyledInicioPage = styled.section`
    ${({ theme }) => css`
        background-color: ${theme.white.primary};

        > :not(hr) {
            padding: 35px;
        }

        > hr {
            width: 95%;
            margin: 0 auto;
            border-color: ${theme.gray.primary};
        }

        .black-bg {
            background-color: ${theme.black.secondary};
            color: ${theme.white.primary};
        }

        .white-bg {
            background-color: ${theme.white.primary};
        }

        h2 {
            font-size: 1.9rem;
            margin: 0;
            white-space: nowrap;
        }

        .titles-container {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
        }

        .introduction-section {
            display: flex;
            flex-flow: row nowrap;
            height: 100vh;
            box-sizing: border-box;
            font-family: 'Lora', serif;
        }

        .submit-button {
            cursor: pointer;
            outline: none;
            padding: 10px 20px;
            border: 2px solid ${theme.green.primary};
            border-radius: 5px;
            background-color: transparent;
            color: ${theme.green.primary};
            font-size: 1.2rem;
            transition: .4s;

            :hover {
                color: ${theme.black.secondary};
                background-color: ${theme.green.primary};
            }
        }

        @media(max-width: 850px) {
            .titles-container {
                margin: 20px 0;   
            }

            .project-section {
                padding: 35px 0;
            }
        }
    `}
`;

export const StyledUnderbarTitle = styled.div<any>`
    ${({ theme, width }) => css`
        height: 5px;
        width: ${width * 0.8}px;
        background-color: ${theme.green.primary};
        margin: 10px 0 20px 0;
    `}
`;
