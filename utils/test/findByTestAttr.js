/**
 * Return node(s) with the given data-test attribute.
 *
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} testAttr - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export default function findByTestAttr(wrapper, testAttr) {
  return wrapper.find(`[data-test="${testAttr}"]`)
}
