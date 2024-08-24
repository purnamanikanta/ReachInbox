
import './App.css';

function App() {
  return(
    <div class="container">
        <h2>Sign In</h2>
        <form>
            <div class="input-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit" class="submit-btn">Sign In</button>
            <a href="#" class="forgot-password">Forgot Password?</a>
        </form>
    </div>
);
}

export default App;
