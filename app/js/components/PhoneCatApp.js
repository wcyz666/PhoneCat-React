/**
 * Created by ASUA on 2015/9/18.
 */
var React = require("react");

module.exports = React.createClass({

    getInitialState: function () {
        var questions = [];

        return {
            ifShow: true,
            questions: questions
        };
    },
    render: function () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        Search: <input className="form-control" ng-model="query" />
                        Sort by:
                        <select ng-model="orderProp">
                            <option value="name">Alphabetical</option>
                            <option value="age">Newest</option>
                            <option value="-age">Oldest</option>
                        </select>
                    </div>

                        <div className="col-md-10">
                            <ul className="phones">
                                <li ng-repeat="phone in phones | filter:query | orderBy:orderProp">
                                    <p></p>
                                </li>
                            </ul>

                        </div>
                </div>
            </div>
        );
    }
});