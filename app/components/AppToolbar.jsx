'use strict';
var React = require('react');
var AppDispatcher = require('../dispatchers/appDispatcher');
var ActionTypes = require('../actions/actionTypes');
var Branding = require('./branding');
var UserMenu = require('./userMenu');
var TeamSearch = require('./TeamSearch');
var TimeControl = require('./TimeControl');

class AppToolbar extends React.Component {

  handleClickManage() {
    AppDispatcher.dispatchViewAction({
      actionType: ActionTypes.SHOW_VIEW,
      value: 'manage'
    });
  }

  render() {
    return (
      <div className="app-toolbar">

        <div className="app-toolbar-branding">
          <Branding link={true} />
        </div>

        <div className="app-toolbar-main">
          <TimeControl {...this.props} />
        </div>

        <div className="app-toolbar-actions">
          <TeamSearch people={this.props.people} />
          { this.props.isAdmin && (
            <button className="material-icons md-18 clear"
                    title="Manage your team"
                    onClick={this.handleClickManage}>
              settings
            </button>
          )}
          <UserMenu {...this.props.user} />
        </div>

      </div>
    );
  }

}

module.exports = AppToolbar;