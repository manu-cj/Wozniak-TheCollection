const FilterNavUi = (
  filterNav,
  filterNavContent,
  filterNavTitle,
  filterNavList,
  
) => {
    filterNav.style.width = '80%';
    filterNav.style.backgroundColor = 'white';
    filterNav.style.padding = '1rem';
    filterNav.style.borderRadius = '5px';
    filterNav.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.4)';
    filterNav.style.display = 'flex';
    filterNav.style.flexDirection = 'row';
    filterNav.style.justifyContent = 'space-around';
    filterNav.style.alignItems = 'center';
    filterNav.style.flexWrap = 'wrap';
    filterNav.style.gap = '15px';
    filterNav.style.position = 'relative';
    filterNav.style.zIndex = '999';
    filterNav.style.right = '20px';
    

    filterNavContent.style.display = 'flex';
    
    filterNavContent.style.flexDirection = 'row';
    filterNavContent.style.justifyContent = 'space-around';
    filterNavContent.style.alignItems = 'center';
    filterNavContent.style.width = '100%';
    filterNavContent.style.height = '100%';
    filterNavContent.style.gap = '15px';

    filterNavList.style.width = '100%';
    filterNavList.style.display = 'flex';
    filterNavList.style.flexWrap = 'wrap';
    filterNavList.style.flexDirection = 'row';
    filterNavList.style.justifyContent = 'space-around';
    filterNavList.style.alignItems = 'center';
    filterNavList.style.gap = '15px';

};
export default FilterNavUi;
