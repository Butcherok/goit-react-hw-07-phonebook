import { FilterInput, FilterLabel, Filters } from './filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterList } from 'redux/index';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <Filters>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={({ currentTarget: { value } }) => dispatch(filterList(value))}
      />
    </Filters>
  );
}
