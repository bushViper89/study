import { connect } from 'react-redux';
import GardenList from '../../components/main/GardenList';
import { setGardenList } from '../../actions/gardenActions';

const mapStateToProps = state => {  
  const { items, totalCount } = state.garden;
  const garden = items;

  return { garden, totalCount };
};

const mapDispatchToProps = {
  setGardenList
};

export default connect(mapStateToProps, mapDispatchToProps)(GardenList);