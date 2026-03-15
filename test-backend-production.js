const https = require('https');

const API_BASE = 'https://yash-dashboard.netlify.app/api';

// Helper to make requests
function request(method, endpoint, data = null) {
    return new Promise((resolve, reject) => {
        const url = `${API_BASE}${endpoint}`;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(body);
                    resolve({ status: res.statusCode, data: json });
                } catch (e) {
                    resolve({ status: res.statusCode, raw: body });
                }
            });
        });

        req.on('error', reject);

        if (data) {
            req.write(JSON.stringify(data));
        }
        req.end();
    });
}

async function runTests() {
    console.log('🚀 Starting Backend API Tests...\n');

    // TEST 1: Projects (Content Sync)
    console.log('1️⃣ Testing Projects API (GET /api/projects)...');
    try {
        const res = await request('GET', '/projects');
        if (res.status === 200 && Array.isArray(res.data)) {
            console.log(`✅ Success! Fetched ${res.data.length} projects.`);
            if (res.data.length > 0) console.log(`   Sample: "${res.data[0].title}"`);
        } else {
            console.log('❌ Failed:', res.data);
        }
    } catch (e) {
        console.log('❌ Error:', e.message);
    }
    console.log('');

    // TEST 2: Posts (Content Sync)
    console.log('2️⃣ Testing Posts API (GET /api/posts)...');
    try {
        const res = await request('GET', '/posts');
        if (res.status === 200 && Array.isArray(res.data)) {
            console.log(`✅ Success! Fetched ${res.data.length} posts.`);
        } else {
            console.log('❌ Failed:', res.data);
        }
    } catch (e) {
        console.log('❌ Error:', e.message);
    }
    console.log('');

    // TEST 3: Settings/Availability (Content Sync)
    console.log('3️⃣ Testing Settings API (GET /api/settings)...');
    try {
        const res = await request('GET', '/settings');
        if (res.status === 200) {
            console.log(`✅ Success! Availability status: ${res.data.available}`);
        } else {
            console.log('❌ Failed:', res.data);
        }
    } catch (e) {
        console.log('❌ Error:', e.message);
    }
    console.log('');

    // TEST 4: Analytics (Write)
    console.log('4️⃣ Testing Analytics Write (POST /api/analytics)...');
    try {
        const res = await request('POST', '/analytics', { duration: 120 });
        if (res.status === 200 && res.data.success) {
            console.log('✅ Success! Recorded test session (120s).');
        } else {
            console.log('❌ Failed:', res.data);
        }
    } catch (e) {
        console.log('❌ Error:', e.message);
    }
    console.log('');

    // TEST 5: Analytics (Read)
    console.log('5️⃣ Testing Analytics Read (GET /api/analytics)...');
    try {
        const res = await request('GET', '/analytics');
        if (res.status === 200) {
            console.log(`✅ Success! Total tracked time: ${res.data.totalTime}s`);
        } else {
            console.log('❌ Failed:', res.data);
        }
    } catch (e) {
        console.log('❌ Error:', e.message);
    }

    console.log('\n🏁 Tests Completed.');
}

runTests();
