import {
    faCogs,
    faFileUpload,
    faEnvelope,
    faDatabase,
    faLock,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Article {
    slug: string;
    title: string;
    description: string;
    icon: IconDefinition;
    content: string;
}

export const articles: Article[] = [
    {
        slug: 'getting-started-with-cpanel',
        title: 'Getting Started with cPanel',
        description: 'Learn the basics of your hosting control panel. How to log in, navigate the dashboard, and update your preferences.',
        icon: faCogs,
        content: `
            <h2>Introduction</h2>
            <p>cPanel is one of the most popular control panels for web hosting. It allows you to manage your website files, databases, email accounts, and more from a user-friendly interface.</p>
            
            <h3>How to Log In</h3>
            <p>To access your cPanel, typically you can go to <code>yourdomain.com/cpanel</code>. You will need the username and password provided in your welcome email.</p>

            <h3>The Dashboard</h3>
            <p>Once logged in, you will see various sections such as Files, Databases, Domains, Email, Metrics, Security, and Software. You can use the search bar at the top to quickly find what you need.</p>

            <h3>Updating Preferences</h3>
            <p>You can change your password, contact information, and language settings from the "Preferences" section usually located at the bottom of the dashboard or via the user menu in the top right corner.</p>
        `
    },
    {
        slug: 'uploading-your-website',
        title: 'Uploading Your Website',
        description: 'Step-by-step guide on how to use the File Manager or FTP to upload your website files to the public_html directory.',
        icon: faFileUpload,
        content: `
            <h2>Using File Manager</h2>
            <p>The easiest way to upload files is via the integrated File Manager.</p>
            <ol>
                <li>Log in to cPanel.</li>
                <li>Click on <strong>File Manager</strong> under the "Files" section.</li>
                <li>Navigate to the <code>public_html</code> directory.</li>
                <li>Click the <strong>Upload</strong> button in the top toolbar.</li>
                <li>Select your files (or a .zip archive) and wait for the upload to complete.</li>
                <li>If you uploaded a .zip file, right-click it and select <strong>Extract</strong>.</li>
            </ol>

            <h2>Using FTP</h2>
            <p>For larger sites, FTP is recommended. You will need an FTP client like FileZilla.</p>
            <ul>
                <li><strong>Host:</strong> ftp.yourdomain.com</li>
                <li><strong>Username:</strong> Your cPanel username</li>
                <li><strong>Password:</strong> Your cPanel password</li>
                <li><strong>Port:</strong> 21</li>
            </ul>
        `
    },
    {
        slug: 'creating-business-emails',
        title: 'Creating Business Emails',
        description: 'Create professional email addresses using your domain name. Setup forwarders and access Webmail.',
        icon: faEnvelope,
        content: `
            <h2>Creating an Account</h2>
            <p>1. Go to the "Email" section in cPanel and click on <strong>Email Accounts</strong>.</p>
            <p>2. Click the <strong>+ Create</strong> button.</p>
            <p>3. Enter the desired username (e.g., info, contact) and a strong password.</p>
            <p>4. Set the storage space (quota) or leave it as unlimited.</p>
            <p>5. Click <strong>Create</strong>.</p>

            <h2>Accessing Webmail</h2>
            <p>You can access your email via the browser by visiting <code>yourdomain.com/webmail</code>. Log in with your full email address and password.</p>
        `
    },
    {
        slug: 'one-click-wordpress-install',
        title: 'One-Click WordPress Install',
        description: 'Use Softaculous to install WordPress in seconds. No technical knowledge required to get your blog running.',
        icon: faWordpress,
        content: `
            <h2>Using Softaculous</h2>
            <p>Most cPanel accounts come with Softaculous App Installer.</p>
            <ol>
                <li>Scroll down to the "Software" section in cPanel and click on <strong>WordPress Manager by Softaculous</strong>.</li>
                <li>Click the <strong>Install</strong> button.</li>
                <li>Choose your protocol (https:// is recommended).</li>
                <li>Choose your domain.</li>
                <li>Leave the "In Directory" field empty to install on the root domain.</li>
                <li>Set your Admin Username and Password.</li>
                <li>Click <strong>Install</strong> at the bottom of the page.</li>
            </ol>
        `
    },
    {
        slug: 'database-management',
        title: 'Database Management',
        description: 'How to create and manage MySQL databases and users for your dynamic applications.',
        icon: faDatabase,
        content: `
            <h2>Creating a Database</h2>
            <p>1. Click on <strong>MySQL Databases</strong>.</p>
            <p>2. Under "Create New Database", enter a name and click <strong>Create Database</strong>.</p>

            <h2>Creating a User</h2>
            <p>1. Scroll down to "MySQL Users".</p>
            <p>2. Enter a username and password.</p>
            <p>3. Click <strong>Create User</strong>.</p>

            <h2>Assigning User to Database</h2>
            <p>1. Scroll to "Add User to Database".</p>
            <p>2. Select the user and the database from the dropdowns.</p>
            <p>3. Click <strong>Add</strong>.</p>
            <p>4. Check "ALL PRIVILEGES" and click <strong>Make Changes</strong>.</p>
        `
    },
    {
        slug: 'free-ssl-certificates',
        title: 'Free SSL Certificates',
        description: 'Secure your website with AutoSSL. Learn how to force HTTPS redirection for better security.',
        icon: faLock,
        content: `
            <h2>AutoSSL</h2>
            <p>cPanel automatically attempts to install a free SSL certificate (Powered by Sectigo or Let's Encrypt) on your domains. You can check the status in <strong>SSL/TLS Status</strong>.</p>

            <h2>Forcing HTTPS</h2>
            <p>To ensure all visitors use the secure connection:</p>
            <p>1. Go to <strong>Domains</strong>.</p>
            <p>2. Toggle the "Force HTTPS Redirect" switch to <strong>On</strong> for your domain.</p>
        `
    }
];
