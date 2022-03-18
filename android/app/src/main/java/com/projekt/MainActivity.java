package com.projekt;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;



public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() {
    return "projekt";
  }
  @Override
      protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
}
