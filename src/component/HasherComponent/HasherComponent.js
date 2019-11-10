import React, {Component} from 'react'

class Hasher extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            isUploaded: false
        }
        onChangeHandler = event => {

            this.setState({
                selectedFile: event.target.file[0]
            });
        }

        onUploadHandler = (event) => {
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = (event)=>{
                var data = event.target.result;
                var encrypted = CryptoJS.SHA256( data );


            }

        }

    }

}
}

export default Hasher
