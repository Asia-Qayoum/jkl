# 🚀 Vercel Deployment Guide

This guide will help you deploy your Academic Matchmaker frontend to Vercel.

## ✅ Pre-Deployment Checklist

- [x] All hardcoded localhost URLs replaced with environment variables
- [x] Firebase configuration uses environment variables
- [x] Vercel configuration file created (`vercel.json`)
- [x] Build configuration verified

## 📋 Required Environment Variables

Add these environment variables in your Vercel project settings (Project Settings → Environment Variables):

### API Configuration
```
VITE_API_URL=https://your-backend-url.railway.app
VITE_PYTHON_SERVICE_URL=https://your-python-service-url.com
```

### Firebase Configuration
Get these from [Firebase Console](https://console.firebase.google.com/) → Project Settings → General → Your apps

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Application Configuration (Optional)
```
VITE_APP_ID=academic-match-production
```

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Navigate to project root:**
   ```bash
   cd "MATCH MODULE"
   ```

4. **Deploy:**
   ```bash
   vercel --prod
   ```

5. **Add Environment Variables:**
   - Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
   - Navigate to Settings → Environment Variables
   - Add all the variables listed above

6. **Redeploy:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub (Recommended)

1. **Push your code to GitHub** (if not already done)

2. **Connect to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Select the repository

3. **Configure Project:**
   - Framework Preset: **Vite** (auto-detected)
   - Root Directory: Leave as default (or set to `MATCH MODULE` if deploying from root)
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)
   - Install Command: `npm install` (default)

4. **Add Environment Variables:**
   - Before deploying, click "Environment Variables"
   - Add all variables listed above
   - Make sure to add them for **Production**, **Preview**, and **Development** environments

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete

## ⚙️ Vercel Configuration

The project includes a `vercel.json` file with optimal settings:

- **Framework**: Vite (auto-detected)
- **Build Output**: `dist` directory
- **SPA Routing**: All routes rewrite to `index.html` for client-side routing
- **Caching**: Static assets cached for 1 year

## 🔧 Post-Deployment Steps

### 1. Update Backend CORS Settings

After deployment, update your backend CORS configuration to allow your Vercel domain:

**If using Railway for backend:**
- Edit `rag-backend/production-index-fallback.js`
- Add your Vercel URL to the CORS origins:
  ```javascript
  const corsOptions = {
    origin: [
      'https://your-app.vercel.app',
      'https://your-custom-domain.com'
    ],
    // ...
  };
  ```
- Redeploy backend

### 2. Update API URLs

If you haven't already, set `VITE_API_URL` in Vercel environment variables to your production backend URL.

### 3. Test Deployment

After deployment, test these features:
- [ ] User registration/login
- [ ] Firebase authentication
- [ ] Smart matching (requires backend)
- [ ] Chat functionality
- [ ] Profile creation
- [ ] File uploads (if applicable)

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**
- Ensure all dependencies are in `package.json`
- Run `npm install` locally to verify
- Check that all imports are correct

**Error: Environment variable undefined**
- Verify all `VITE_*` variables are set in Vercel
- Make sure variables are set for the correct environment (Production/Preview/Development)
- Redeploy after adding variables

### Runtime Errors

**Error: Backend not responding**
- Verify `VITE_API_URL` is set correctly
- Check backend is deployed and accessible
- Verify CORS settings in backend allow your Vercel domain

**Error: Firebase not working**
- Verify all Firebase environment variables are set
- Check Firebase project settings
- Ensure Firestore security rules allow your domain

### CORS Errors

If you see CORS errors:
1. Update backend CORS to include your Vercel URL
2. Ensure credentials are handled correctly
3. Check browser console for specific error messages

## 📊 Monitoring

After deployment, monitor:
- **Vercel Analytics**: Built-in performance monitoring
- **Error Tracking**: Consider adding Sentry for error tracking
- **Uptime Monitoring**: Use services like UptimeRobot

## 🔐 Security Notes

- Never commit `.env` files to Git
- All sensitive keys should be in Vercel Environment Variables
- Firebase keys are safe to expose (they're meant for client-side)
- Backend API keys should NEVER be in frontend environment variables

## 🎉 Success Checklist

After deployment, verify:
- [ ] Site loads without errors
- [ ] All environment variables are set
- [ ] Firebase authentication works
- [ ] Backend API calls work (if backend is deployed)
- [ ] Mobile responsiveness works
- [ ] HTTPS is enabled (automatic with Vercel)
- [ ] Custom domain configured (if applicable)

## 📞 Need Help?

- Check [Vercel Documentation](https://vercel.com/docs)
- Review backend logs if API calls fail
- Check Firebase Console for authentication issues
- Review this project's main [README.md](./README.md) and [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Last Updated**: January 2025

