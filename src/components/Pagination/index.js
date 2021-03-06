import React from "react"
import propTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { ArrowForward as Forward } from "styled-icons/material/ArrowForward"
import { ArrowBack as Back } from "styled-icons/material/ArrowBack"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink
        to={prevPage}
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Back size={20} /> página antetior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
      >
        próxima página <Forward size={20} />
      </AniLink>
    )}
  </S.PaginationWrapper>
)

export default Pagination

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}
