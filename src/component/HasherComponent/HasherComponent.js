import React, {Component, Fragment} from 'react'
import CryptoJS from 'crypto-js'
import classes from './Hasher.module.css'
import {Link} from 'react-router-dom'


class Hasher extends Component {
    onChangeHandler = event => {

        this.setState({
            selectedFile: this.fileInput.current.files[0],
        });
        alert(
            `Selected file name - ${
                this.fileInput.current.files[0].name
                }`
        );
        event.preventDefault()
    }
    onUploadHandler = (event) => {
        const data = {
            ...this.state.selectedFile
        }
        const encrypted = CryptoJS.SHA256(data);
        this.setState({
            hashedFile: encrypted,
            isEncrypted: true
        });

        if (this.state.isEncrypted) {
            alert("File is encrypted successfully");

        }

        console.log(this.state.hashedFile)
        event.preventDefault();


    }

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            selectedFile: null,
            isUploaded: false,
            isEncrypted: false,
            hashedFile: null


        }
        onCheckHandler = () => {

        }
    }


    render() {
        return (
            <Fragment>

                <div>
                    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                        <a class="navbar-brand" href="#">Digital Signature</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarsExample04"
                                aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarsExample04">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="/">Hash </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/verify">Check </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div id="hashModal" class="modal fade" role="dialog">
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
                            <h3 class="card-header bg-secondary text-white">Hash a File</h3>
                            <div class="card-body">
                                <form>
                                    <div class="form-group row">
                                        <div class="custom-file col-md-6 m-auto">
                                            <input type="file" class="custom-file-input" ref={this.fileInput}
                                                   onChange={this.onChangeHandler}
                                                   id="inputGroupFile04"
                                                   aria-describedby="inputGroupFileAddon04"/>
                                            <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <button type="submit" onClick={this.onUploadHandler}
                                                class="btn btn-secondary btn-lg m-auto" id="hashButton">
                                            Hash
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className={classes.blogFooter}>

                </footer>

            </Fragment>

        )
    }
}

export default Hasher;
