package com.example.ornichola.simplecalc;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class SecondActivity extends AppCompatActivity {

    TextView result;
    double res;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        res = getIntent().getExtras().getDouble("RESULT");

        result = (TextView)findViewById(R.id.result);
        result.setText(String.valueOf(res));

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
    }
}
