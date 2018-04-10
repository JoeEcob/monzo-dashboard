import { connect } from 'react-redux';
import HeaderBar from '../components/HeaderBar';
import { logout } from '../actions/Logout'

const mapStateToProps = state => {
  const { accessToken } = state;

  return {
    hasAccessToken: accessToken.length > 0
  };
};

const mapDispatchToProps = dispatch => ({
  logoutOnClick: () => {
    dispatch(logout())
  }
});

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderBar);

export default Header;
