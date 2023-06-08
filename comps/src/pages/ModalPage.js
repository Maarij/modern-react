import Modal from "../components/Modal";
import {useState} from "react";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>

    return (
        <div className={"relative"}>
            <Button primary onClick={handleClick}>
                Open Modal
            </Button>
            {showModal && modal}

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit odio quis ullamcorper facilisis. Nullam sit amet arcu ipsum. Pellentesque sollicitudin risus ex, sed sagittis purus suscipit ut. Mauris in leo sit amet arcu feugiat tempus quis ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est erat, tincidunt vel pharetra in, sollicitudin id quam. Donec rhoncus pellentesque ipsum, faucibus commodo nisi interdum et. Nullam id ornare felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit odio quis ullamcorper facilisis. Nullam sit amet arcu ipsum. Pellentesque sollicitudin risus ex, sed sagittis purus suscipit ut. Mauris in leo sit amet arcu feugiat tempus quis ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est erat, tincidunt vel pharetra in, sollicitudin id quam. Donec rhoncus pellentesque ipsum, faucibus commodo nisi interdum et. Nullam id ornare felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit odio quis ullamcorper facilisis. Nullam sit amet arcu ipsum. Pellentesque sollicitudin risus ex, sed sagittis purus suscipit ut. Mauris in leo sit amet arcu feugiat tempus quis ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est erat, tincidunt vel pharetra in, sollicitudin id quam. Donec rhoncus pellentesque ipsum, faucibus commodo nisi interdum et. Nullam id ornare felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit odio quis ullamcorper facilisis. Nullam sit amet arcu ipsum. Pellentesque sollicitudin risus ex, sed sagittis purus suscipit ut. Mauris in leo sit amet arcu feugiat tempus quis ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est erat, tincidunt vel pharetra in, sollicitudin id quam. Donec rhoncus pellentesque ipsum, faucibus commodo nisi interdum et. Nullam id ornare felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit odio quis ullamcorper facilisis. Nullam sit amet arcu ipsum. Pellentesque sollicitudin risus ex, sed sagittis purus suscipit ut. Mauris in leo sit amet arcu feugiat tempus quis ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est erat, tincidunt vel pharetra in, sollicitudin id quam. Donec rhoncus pellentesque ipsum, faucibus commodo nisi interdum et. Nullam id ornare felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit odio quis ullamcorper facilisis. Nullam sit amet arcu ipsum. Pellentesque sollicitudin risus ex, sed sagittis purus suscipit ut. Mauris in leo sit amet arcu feugiat tempus quis ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est erat, tincidunt vel pharetra in, sollicitudin id quam. Donec rhoncus pellentesque ipsum, faucibus commodo nisi interdum et. Nullam id ornare felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit odio quis ullamcorper facilisis. Nullam sit amet arcu ipsum. Pellentesque sollicitudin risus ex, sed sagittis purus suscipit ut. Mauris in leo sit amet arcu feugiat tempus quis ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est erat, tincidunt vel pharetra in, sollicitudin id quam. Donec rhoncus pellentesque ipsum, faucibus commodo nisi interdum et. Nullam id ornare felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit odio quis ullamcorper facilisis. Nullam sit amet arcu ipsum. Pellentesque sollicitudin risus ex, sed sagittis purus suscipit ut. Mauris in leo sit amet arcu feugiat tempus quis ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est erat, tincidunt vel pharetra in, sollicitudin id quam. Donec rhoncus pellentesque ipsum, faucibus commodo nisi interdum et. Nullam id ornare felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit odio quis ullamcorper facilisis. Nullam sit amet arcu ipsum. Pellentesque sollicitudin risus ex, sed sagittis purus suscipit ut. Mauris in leo sit amet arcu feugiat tempus quis ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est erat, tincidunt vel pharetra in, sollicitudin id quam. Donec rhoncus pellentesque ipsum, faucibus commodo nisi interdum et. Nullam id ornare felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit odio quis ullamcorper facilisis. Nullam sit amet arcu ipsum. Pellentesque sollicitudin risus ex, sed sagittis purus suscipit ut. Mauris in leo sit amet arcu feugiat tempus quis ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est erat, tincidunt vel pharetra in, sollicitudin id quam. Donec rhoncus pellentesque ipsum, faucibus commodo nisi interdum et. Nullam id ornare felis.
            </p>
        </div>
    )
}

export default ModalPage;