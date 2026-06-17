import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function TopNavBar(){
    return (
        <div>
            <div className="scheduler-title">
                <p>SCHEDULER</p>
            </div>
            <div>
                <div>
                    <p>Search here...</p>
                </div>
            </div>
        </div>
    );
}