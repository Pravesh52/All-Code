const apiKey = "9f6290d6cda9a36a63755fadee71f83d";
        
        const elements = {
            cityInput: document.getElementById('cityInput'),
            searchBtn: document.getElementById('searchBtn'),
            loading: document.getElementById('loading'),
            errorMessage: document.getElementById('errorMessage'),
            weatherInfo: document.getElementById('weatherInfo'),
            location: document.getElementById('location'),
            date: document.getElementById('date'),
            iconEmoji: document.getElementById('iconEmoji'),
            temperature: document.getElementById('temperature'),
            description: document.getElementById('description'),
            feelsLike: document.getElementById('feelsLike'),
            humidity: document.getElementById('humidity'),
            windSpeed: document.getElementById('windSpeed'),
            pressure: document.getElementById('pressure')
        };

        // Weather icon mapping
        const weatherIcons = {
            '01d': '☀️', '01n': '🌙',
            '02d': '⛅', '02n': '☁️',
            '03d': '☁️', '03n': '☁️',
            '04d': '☁️', '04n': '☁️',
            '09d': '🌧️', '09n': '🌧️',
            '10d': '🌦️', '10n': '🌧️',
            '11d': '⛈️', '11n': '⛈️',
            '13d': '❄️', '13n': '❄️',
            '50d': '🌫️', '50n': '🌫️'
        };

        async function getWeatherData(city) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            
            try {
                showLoading();
                const response = await fetch(url);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('City not found. Please check the spelling and try again.');
                    } else if (response.status === 401) {
                        throw new Error('Invalid API key. Please check your API configuration.');
                    } else {
                        throw new Error('Failed to fetch weather data. Please try again later.');
                    }
                }
                
                const data = await response.json();
                displayWeatherData(data);
                
            } catch (error) {
                showError(error.message);
            } finally {
                hideLoading();
            }
        }

        function displayWeatherData(data) {
            hideError();
            
            // Update location and date
            elements.location.textContent = `${data.name}, ${data.sys.country}`;
            elements.date.textContent = new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Update weather icon
            const iconCode = data.weather[0].icon;
            elements.iconEmoji.textContent = weatherIcons[iconCode] || '🌤️';
            
            // Update temperature and description
            elements.temperature.textContent = `${Math.round(data.main.temp)}°C`;
            elements.description.textContent = data.weather[0].description;
            
            // Update weather details
            elements.feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
            elements.humidity.textContent = `${data.main.humidity}%`;
            elements.windSpeed.textContent = `${data.wind.speed} m/s`;
            elements.pressure.textContent = `${data.main.pressure} hPa`;
            
            // Show weather info
            elements.weatherInfo.classList.add('show');
        }

        function showLoading() {
            elements.loading.classList.add('show');
            elements.weatherInfo.classList.remove('show');
            hideError();
        }

        function hideLoading() {
            elements.loading.classList.remove('show');
        }

        function showError(message) {
            elements.errorMessage.textContent = message;
            elements.errorMessage.classList.add('show');
            elements.weatherInfo.classList.remove('show');
        }

        function hideError() {
            elements.errorMessage.classList.remove('show');
        }

        function handleSearch() {
            const city = elements.cityInput.value.trim();
            
            if (!city) {
                showError('Please enter a city name.');
                return;
            }
            
            getWeatherData(city);
        }

        // Event listeners
        elements.searchBtn.addEventListener('click', handleSearch);

        elements.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });

        elements.cityInput.addEventListener('input', () => {
            if (elements.errorMessage.classList.contains('show')) {
                hideError();
            }
        });

        // Load app without any default weather data
        window.addEventListener('load', () => {
            // Keep input empty and don't load any weather data
            elements.cityInput.value = '';
        });