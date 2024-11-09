document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Username dan password yang valid
    const validUsername = "admin1";  // Ganti dengan username yang sesuai
    const validPassword = "radit1234";  // Ganti dengan password yang sesuai

    if (username === '' || password === '') {
        alert('Username dan password tidak boleh kosong');
    } else if (username === validUsername && password === validPassword) {
        alert('Login Berhasil');
        // Jika login berhasil, arahkan ke halaman dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Username atau password salah');
    }
});
