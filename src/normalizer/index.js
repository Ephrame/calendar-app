import sortBy from 'lodash/sortBy'

export function transformSlot (elms) {
  const sortedElementWithInformation = sortBy(elms, [ 'start' ]).reduce(
    (acc, elm, index) => {
      // find the colision of the current element
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
      // First idea of the process
      if (lastColision.length === 1) {
        // type of the presiousColi to put the new element with the good colision type
        const previous = lastColision[0].coli
        const previousIndex = lastColision[0].index

        // we hate to keep the max numberOfColisition for the case :
        /**
        {start: 400, end: 600},
        { start: 540, end: 600 },
        { start: 560, end: 620 },
        { start: 610, end: 670 }
        **/
        // because the last element have just one colision (and the other 3)
        const previousNumberOfColision = acc.newElements[previousIndex].numberOfColisition
        const result = {
          previous: {
            ...elm,
            colision: !previous ? 'C2' : previous === 'C1' ? 'C2' : 'C1'
          },
          newElements: {
            ...acc.newElements,
            [previousIndex]: {
              ...acc.newElements[previousIndex],
              numberOfColisition: previousNumberOfColision > 2 ? previousNumberOfColision : 2,
              colision: !previous ? 'C1' : previous
            },
            [index]: {
              ...elm,
              numberOfColisition: previousNumberOfColision > 2 ? previousNumberOfColision : 2,
              colision: !previous ? 'C2' : previous === 'C1' ? 'C2' : 'C1'
            }
          }
        }
        return result
        // In general
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
        // numberOfColisition is for the width
        lastColision.forEach(coli => {
          const preNumberOfTailleColision = result.newElements[coli.index].numberOfColisition
          result.newElements[coli.index] = {
            ...result.newElements[coli.index],
            numberOfColisition:  preNumberOfTailleColision > tailleLastColision ? preNumberOfTailleColision : tailleLastColision
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
