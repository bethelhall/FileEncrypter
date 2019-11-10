import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import classes from './HashVerifier.module.css'


class HashVerifier extends Component {

    onChangeHandler = (event) => {


    }

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();

    }

    render() {
        return (
            <Fragment>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Digital Signature</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                            aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample04">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Hash </Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/verify">Check </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div id="checkModal" class="modal fade" role="dialog">
                    <div class="modal-dialog modal-md" role="content">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Result</h4>
                                <button type="button" class="close" data-dismiss="modal">
                                    &times;
                                </button>
                            </div>
                            <div class="modal-body">

                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div className={classes.Card}>
                        <h3 class="card-header bg-secondary text-white">Check Digital Signature</h3>
                        <div class="card-body">
                            <form>
                                <div class="form-group row">
                                    <div class="custom-file col-md-6 m-auto">
                                        <input type="file" class="custom-file-input" onChange={this.onChangeHandler}
                                               ref={this.fileInput} id="inputGroupFile04"
                                               aria-describedby="inputGroupFileAddon04"/>
                                        <label class="custom-file-label" for="inputGroupFile04">Choose
                                            file</label>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <button onClick={this.props.checkClicked} type="submit"
                                            class="btn btn-secondary btn-lg m-auto" id="checkButton">
                                        Check Digital Signature
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </Fragment>

        )
    }
}

export default HashVerifier