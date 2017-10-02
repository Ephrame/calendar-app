import sortBy from 'lodash/sortBy'

export function transformSlot (elms) {
  const sortedElementWithInformation = sortBy(elms, [ 'start' ]).reduce(
    (acc, elm, index) => {
      const lastColision = Object.keys(acc.newElements).reduce((
        colisions,
        key,
        index
      ) => {
        const toFilter = acc.newElements[key]
        if (elm.start < toFilter.end) {
          colisions.push({ coli: toFilter.colision, index })
        }
        return colisions
      }, [])
      if (lastColision.length === 1) {
        const previous = lastColision[0].coli
        const previousIndex = lastColision[0].index
        const result = {
          previous: {
            ...elm,
            colision: !previous ? 'C2' : previous === 'C1' ? 'C2' : 'C1'
          },
          newElements: {
            ...acc.newElements,
            [previousIndex]: {
              ...acc.newElements[previousIndex],
              numberOfColisition: 2,
              colision: !previous ? 'C1' : previous
            },
            [index]: {
              ...elm,
              numberOfColisition: 2,
              colision: !previous ? 'C2' : previous === 'C1' ? 'C2' : 'C1'
            }
          }
        }
        return result
      } else if (lastColision.length >= 2) {
        const tailleLastColision = lastColision.length + 1
        const result = {
          previous: { ...elm, colision: 'C' + (lastColision.length + 1) },
          newElements: {
            ...acc.newElements,
            [index]: {
              ...elm,
              numberOfColisition: tailleLastColision,
              colision: 'C' + (lastColision.length + 1)
            }
          }
        }
        lastColision.forEach(coli => {
          result.newElements[coli.index] = {
            ...result.newElements[coli.index],
            numberOfColisition: tailleLastColision
          }
        })
        return result
      }
      return {
        prePrevious: acc.previous,
        previous: elm,
        newElements: { ...acc.newElements, [index]: elm }
      }
    },
    { previous: {}, newElements: {} }
  )
  return sortedElementWithInformation
}
